import React from 'react'

type Props = {
    category: any;
    setCategory: any;

}
function UserListHeading({category,setCategory}: Props) {
    function handleClick(e: any) {
        if (e.target.id === 'groups_title') {
            setCategory({ friends: false, groups: true });
        } 
        else if (e.target.id === 'connections_title'){
            setCategory({ friends: true, groups: false });
        }
    }
    return (
        <div>
            <div className={`flex gap-2 bg-gray-100 bg-opacity-30 py-2 px-4 `}>
                <h2 className={`text-sm font-semibold  ${category.groups?"bg-slate-50 text-black":"text-gray-300"} rounded-md p-0.5`} onClick={handleClick} id='groups_title'>Groups</h2>
                <h2 className={`text-sm font-semibold  ${category.friends?"bg-slate-50 text-black":"text-gray-300"} rounded-md p-0.5`} onClick={handleClick}id='connections_title'>Connections</h2>
            </div>
        </div>
    )
}

export default UserListHeading
