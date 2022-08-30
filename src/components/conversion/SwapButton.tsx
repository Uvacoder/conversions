import { ReactComponent as SwapIcon } from '../../assets/swap-horizontal.svg';

const SwapButton = ({ onSwap }: { onSwap: () => void }) => {
  return (
    <div
      className="bg-stone-800 self-end mb-[10px] border border-stone-600 p-2 rounded-lg -mx-2 z-10 cursor-pointer"
      onClick={onSwap}
    >
      <SwapIcon width={25} height={25} />
    </div>
  );
};

export default SwapButton;
