export default function ActivityIndicator({ text }) {
    return (
        <div className="text-center">
            <div className={`border-4 border-[#29374C] animate-spin border-l-transparent rounded-full w-[36px] h-[36px]`}></div>
            {text}
        </div>
    )
}