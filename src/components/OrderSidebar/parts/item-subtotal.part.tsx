type Props = {
    img: string;
    title: string;
    price: string;
    total: number;
    priceTotal: string;
}

export default function ItemSubtotal({img, title, price, total, priceTotal}: Props) {
    return <div className="flex flex-row mb-5 border-b pb-4">
        <div className="w-14 py-2 bg-tertiary rounded-lg flex justify-center items-center">
        <img src={img} className="w-10 h-10" />
        </div>
        <div className="flex flex-col grow pl-3 items-start justify-center">
            <span className="font-bold text-xs truncate w-[125px]">
                {title}
            </span>
            <span className="font-light text-xs text-gray-400 mt-1">
                {price}
            </span>
        </div>
        <div className="flex flex-col mr-4 pl-2 items-start justify-center">
            <span className="font-bold text-xs">
               {total}x
            </span>
            <span className="font-light text-xs text-gray-400">
                {priceTotal}
            </span>
        </div>
        <div className="flex mx-2 flex-col gap-2">
            <button className="px-2 bg-green-400 rounded">+</button>
            <button className="px-2 bg-red-400 rounded">-</button>
        </div>
    </div>
}