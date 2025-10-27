import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const QuickContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-primary shadow-lg hover:scale-110 transition-transform"
        onClick={() => window.open('https://t.me/yourusername', '_blank')}
      >
        <Icon name="Send" size={24} />
      </Button>
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:scale-110 transition-transform"
        onClick={() => window.open('https://wa.me/1234567890', '_blank')}
      >
        <Icon name="MessageCircle" size={24} />
      </Button>
    </div>
  );
};

export default QuickContactButtons;
