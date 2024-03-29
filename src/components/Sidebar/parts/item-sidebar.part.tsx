type Props = {
    icon: string;
    label: string;
    active: boolean;
    isLocked?: boolean;
}

export default function ItemSidebar({ icon, label, active, isLocked }: Props) {
    return active ? <div className="w-20 py-3 bg-primary flex flex-col justify-center items-center rounded-xl shadow-md mb-5">
        <img src={icon} className="w-6 h-6" />
        <span className="text-xs text-white mt-1">{label}</span>
    </div> : <div className="w-20 py-2 flex flex-col justify-center items-center mb-4">
        <img src={icon} className="w-6 h-6" />
        <span className="text-xs text-gray-400 mt-1">{isLocked ? "Em breve...." : label}</span>
    </div>
}