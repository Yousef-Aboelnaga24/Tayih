import { Offline} from "react-detect-offline";

const OfflineAlert = () => {

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-9999 w-full max-w-sm px-4 md:px-0 pointer-events-none">
            <Offline>
                <div
                    className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_15px_40px_-10px_rgba(239,68,68,0.3)] rounded-2xl p-4 flex items-center gap-4 animate-[fade-in-up_0.5s_ease-out]"
                    aria-live="polite"
                    role="alert"
                >
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 shrink-0 shadow-inner">
                        <i className="fas fa-wifi-slash text-xl animate-pulse"></i>
                    </div>
                    <div>
                        <strong className="block text-gray-900 font-bold text-base mb-0.5">انقطع الاتصال</strong>
                        <span className="text-gray-500 text-sm">نحن ننتظر عودة الإنترنت...</span>
                    </div>
                </div>
            </Offline>
        </div>
    );
};

export default OfflineAlert;
