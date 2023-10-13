import Phone from "@/icons/Phone";
import BullHorn from "@/icons/bullHorn";
import Cart from "@/icons/cart";
import Cloud from "@/icons/cloud";
import Code from "@/icons/code";
import Email from "@/icons/email";
import Location from "@/icons/location";
import Test from "@/icons/test";
import Wand from "@/icons/wand";

const RenderIcon = ({ type, ...rest }: { type: string }) => {
  switch (type) {
    case "BULLHORN": {
      return <BullHorn {...rest} />;
    }
    case "WAND": {
      return <Wand {...rest} />;
    }
    case "CODE": {
        return <Code {...rest} />
    }
    case "CLOUD": {
        return <Cloud {...rest} />
    }
    case "CART": {
        return <Cart {...rest} /> 
    }
    case "TEST": {
        return <Test {...rest} />
    }
    case "LOCATION": {
      return <Location {...rest} />
    }
    case "PHONE": {
      return <Phone {...rest} />
    }
    case "MAIL": {
      return <Email {...rest} />
    }
  }
};

export default RenderIcon;
