"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/app/utils/cn";

export function PlaceholdersAndVanishInput({
    placeholders,
    onChange,
    onSubmit,
    trigger,
    lineStrike,
    value,
    setValue,
}: {
    placeholders: string[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    trigger?: boolean;
    lineStrike?: boolean;
    value: string;
    setValue: (value: string) => void;
}) {
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

    useEffect(() => {
        const startAnimation = () => {
            const interval = setInterval(() => {
                setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
            }, 1500);
            return () => clearInterval(interval);
        };

        startAnimation();
    }, [placeholders.length]);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const newDataRef = useRef<any[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const [animating, setAnimating] = useState(false);

    const draw = useCallback(() => {
        if (!inputRef.current) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 800;
        canvas.height = 800;
        ctx.clearRect(0, 0, 800, 800);
        const computedStyles = getComputedStyle(inputRef.current);

        const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
        ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
        ctx.fillStyle = "#FFF";
        ctx.fillText(value, 16, 40);

        const imageData = ctx.getImageData(0, 0, 800, 800);
        const pixelData = imageData.data;
        const newData: any[] = [];

        for (let t = 0; t < 800; t++) {
            let i = 4 * t * 800;
            for (let n = 0; n < 800; n++) {
                let e = i + 4 * n;
                if (
                    pixelData[e] !== 0 &&
                    pixelData[e + 1] !== 0 &&
                    pixelData[e + 2] !== 0
                ) {
                    newData.push({
                        x: n,
                        y: t,
                        color: [
                            pixelData[e],
                            pixelData[e + 1],
                            pixelData[e + 2],
                            pixelData[e + 3],
                        ],
                    });
                }
            }
        }

        newDataRef.current = newData.map(({ x, y, color }) => ({
            x,
            y,
            r: 1,
            color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
        }));
    }, [value]);

    useEffect(() => {
        draw();
    }, [value, draw]);

    const animate = (start: number) => {
        const animateFrame = (pos: number = 0) => {
            requestAnimationFrame(() => {
                const newArr = [];
                for (let i = 0; i < newDataRef.current.length; i++) {
                    const current = newDataRef.current[i];
                    if (current.x < pos) {
                        newArr.push(current);
                    } else {
                        if (current.r <= 0) {
                            current.r = 0;
                            continue;
                        }
                        current.x += Math.random() > 0.5 ? 1 : -1;
                        current.y += Math.random() > 0.5 ? 1 : -1;
                        current.r -= 0.05 * Math.random();
                        newArr.push(current);
                    }
                }
                newDataRef.current = newArr;
                const ctx = canvasRef.current?.getContext("2d");
                if (ctx) {
                    ctx.clearRect(pos, 0, 800, 800);
                    newDataRef.current.forEach((t) => {
                        const { x: n, y: i, r: s, color: color } = t;
                        if (n > pos) {
                            ctx.beginPath();
                            ctx.rect(n, i, s, s);
                            ctx.fillStyle = color;
                            ctx.strokeStyle = color;
                            ctx.stroke();
                        }
                    });
                }
                if (newDataRef.current.length > 0) {
                    animateFrame(pos - 8);
                } else {
                    setValue("");
                    setAnimating(false);
                }
            });
        };
        animateFrame(start);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !animating) {
            vanishAndSubmit();
        }
    };

    const vanishAndSubmit = () => {
        setAnimating(true);
        draw();

        const value = inputRef.current?.value || "";
        if (value && inputRef.current) {
            const maxX = newDataRef.current.reduce(
                (prev, current) => (current.x > prev ? current.x : prev),
                0
            );
            animate(maxX);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // vanishAndSubmit();
        // onSubmit && onSubmit(e);
    };
    useEffect(() => {  
        if (trigger && !animating) {
            vanishAndSubmit();
        }
     }, [trigger]);
    return (
        <form
            className={cn(
                "w-full relative max-w-xl mx-auto bg-white dark:bg-zinc-800 h-7 rounded-full group-hover:bg-opacity-30 bg-opacity-25 text-white overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200",
                value && "bg-gray-50"
            )}
            onSubmit={handleSubmit}
        >
            <canvas
                className={cn(
                    "absolute pointer-events-none  text-base text-white transform scale-50 place-self-center  origin-top-left filter  w-fit dark:invert-0 ",
                    !animating ? "opacity-0" : "opacity-100",
                    lineStrike && "line-through"
                )}
                ref={canvasRef}
            />
            <input
                onChange={(e) => {
                    if (!animating) {
                        setValue(e.target.value);
                        onChange && onChange(e);
                    }
                }}
                
                ref={inputRef}
                value={value}
                type="text"
                className={cn(
                    "w-fit relative text-sm sm:text-base z-50 border-none text-white bg-transparent  h-full rounded-full focus:outline-none focus:ring-0 p-1 place-self-center",
                    animating && "text-transparent dark:text-transparent",
                    lineStrike && "line-through"
                )}
            />

            
            <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
                <AnimatePresence mode="wait">
                    {!value && (
                        <motion.p
                            initial={{
                                y: 5,
                                opacity: 0,
                            }}
                            key={`current-placeholder-${currentPlaceholder}`}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -15,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "linear",
                            }}
                            className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
                        >
                            {placeholders[currentPlaceholder]}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </form>
    );
}
