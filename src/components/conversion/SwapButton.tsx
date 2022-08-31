import { ReactComponent as SwapIcon } from '../../assets/swap-horizontal.svg';

const ICON_SIZE = 20;
const SwapButton = ({ onSwap }: { onSwap: () => void }) => {
  return (
    <div
      className="flex items-center bg-white border border-stone-300 p-2 rounded-lg 
      rotate-90 xs:rotate-0 transition cursor-pointer self-end xs:min-h-[42px]"
      onClick={onSwap}
    >
      <SwapIcon width={ICON_SIZE} height={ICON_SIZE} />
    </div>
  );
};

export default SwapButton;
