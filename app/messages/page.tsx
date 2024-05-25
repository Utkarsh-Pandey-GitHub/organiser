import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import UserListItem from '../_components/users/UserListItem'
import UserListHeading from '../_components/users/UserListHeading'


function page() {
    return (
        <div className='mx-5 '>
            <ResizablePanelGroup direction='horizontal' style={{ "height": "90vh" }} className='rounded-md'>
                <ResizablePanel defaultSize={25}>
                    <ResizablePanelGroup direction='vertical' className='rounded-tr-md'>
                        <ResizablePanel defaultSize={5}>
                            <UserListHeading />
                        </ResizablePanel>

                        <ResizablePanel>
                            {/* <div className="bg-red-500 h-full flex justify-center place-items-center"> */}
                            <UserListItem />
                            {/* </div> */}
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
                <ResizableHandle withHandle className='bg-gray-100 bg-opacity-30 rounded-t-lg '/>
                <ResizablePanel>
                    <div className=" h-full ">
                        <ResizablePanelGroup direction='vertical'>
                            <ResizablePanel defaultSize={5} className='rounded-l-full'>
                                <div className="bg-gray-100 bg-opacity-30 h-full flex justify-start place-items-center font-semibold">
                                <img
                                    className="w-12 h-12 rounded-full object-cover mr-4  hover:scale-125"
                                    src="https://randomuser.me/api/portraits/women/72.jpg"
                                    alt="User avatar"
                                    />

                                    Peer Name
                                    </div>
                            </ResizablePanel>
                            <ResizablePanel>
                                <div className=" flex   justify-evenly h-full">
                                    <div className="flex flex-col h-full p-1 w-full bg-black">
                                        <div className=" overflow-y-auto h-full">

                                            <div className="flex flex-col mb-4 gap-4 py-4 w-full  h-full">
                                                <div className="flex ">
                                                    <div className="bg-gray-100 rounded-xl px-4 py-2 md:max-w-[60%] max-w-[80%] bg-opacity-10 ">
                                                        <p className="text-gray-300 text-md ">Hey, how are you?
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque similique sit nobis quia porro asperiores iusto ipsa amet? Sint id autem, a eos architecto eum quam quos, eius perspiciatis odio optio nulla eveniet sequi quo accusantium? Eos tempora, voluptatibus dolore iusto accusamus assumenda labore voluptas maxime deleniti non minus laboriosam, molestiae maiores error. Voluptatibus ad reiciendis cum nobis eligendi necessitatibus rerum, ducimus beatae esse harum voluptas enim maiores officia vero voluptate tempore at tempora numquam nemo ex fugit excepturi ipsam! Explicabo a sed expedita! Excepturi voluptatem architecto temporibus similique perferendis culpa! Quos veniam dolorum perspiciatis atque explicabo maxime facere dolor! Nesciunt eaque, perspiciatis corporis rerum voluptates tenetur hic, qui esse facere dolorem in possimus tempora placeat unde? Autem quisquam voluptatum quod iure earum ad ullam quae blanditiis. Ipsam sequi corporis, alias, maxime nemo reiciendis excepturi delectus hic est voluptatum molestiae voluptas! Voluptas, quibusdam ipsum itaque alias enim recusandae saepe nesciunt ad non, facere debitis sequi qui dicta at quos amet labore unde. Laudantium repudiandae harum eius eum maxime quae officiis culpa, hic fugiat, similique ipsum quam saepe. Eaque laborum quidem, harum nulla eum quas nam necessitatibus quam explicabo sunt quisquam rerum? Sint esse, at atque odio debitis quos laborum nostrum doloremque, accusamus voluptate numquam, similique ratione nemo. Vitae eum dolore, ducimus fuga eligendi porro animi corrupti beatae aliquid quisquam. Dolor hic, beatae quos, nisi voluptates quis quidem corrupti ut iure optio quam voluptatem quibusdam nulla amet veritatis! Dolor voluptas consectetur, laudantium cumque, labore soluta fugiat atque necessitatibus harum adipisci itaque enim ut a quam iure architecto. Maxime quam vel nam, fugit modi mollitia sequi aliquid. Incidunt soluta animi dolorem, quo voluptas rerum, dolor omnis voluptatem molestias quia ipsum? Dolores suscipit, quaerat debitis facilis ex aliquam quisquam magni est rem, a nobis incidunt, vel maxime dolor eveniet! Id excepturi blanditiis accusamus quae consectetur modi mollitia, voluptatem unde rem impedit amet illo quia odit quibusdam dolorum eos saepe, ut nihil est omnis! Neque cupiditate ex sint reiciendis culpa iure quod, praesentium nesciunt consequuntur nulla provident cum minus ea, laudantium tempore. Explicabo expedita ipsa aspernatur vitae magni ducimus, perspiciatis consequuntur numquam dolor labore accusamus quia asperiores at delectus quis! A nam quam consequuntur voluptatum qui sunt nesciunt eveniet officia commodi modi, culpa, esse nobis? Illo atque obcaecati ea fugiat ex saepe distinctio laudantium facere nostrum repudiandae dolore odio in blanditiis modi, a delectus aliquid eius. Ipsum asperiores tempora quae maiores ab quod. Quisquam, voluptates.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <div className="bg-gray-50 rounded-xl px-4 py-2 max-w-[80%]">
                                                        <p className="text-black text-sm">I'm good, thanks! How about you?</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-start">
                                                    <div className="bg-gray-100 rounded-xl px-4 py-2 md:max-w-[60%] max-w-[80%] bg-opacity-10 ">
                                                        <p className="text-gray-300 text-md">I'm doing great, thanks for asking!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </ResizablePanel>
                            <ResizablePanel defaultSize={6}>
                                <div className="bg-black h-full flex justify-center place-items-center p-3 ">
                                    <div className="flex justify-center items-center h-16 w-full">

                                        <input type="text" className=" border-gray-300 rounded-lg py-2 px-4 w-full  mr-4 text-gray-800" placeholder="Type a message..." />
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
                                    </div>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </ResizablePanel>

            </ResizablePanelGroup>
        </div>
    )
}

export default page
