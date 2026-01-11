export default function VerticalLines() {
    return (
        <div className="absolute inset-0 flex justify-around w-full h-full overflow-hidden pointer-events-none select-none px-4">
            {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className="relative w-[2px] h-full opacity-50"
                    style={{
                        backgroundImage: `repeating-linear-gradient(to bottom, #e9204f 0px, #e9204f 2px, transparent 2px, transparent 12px)`
                    }}
                />
            ))}
        </div>
    );
}
