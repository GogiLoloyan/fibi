import CRMIcon from "../../public/icons/crm.svg";
import PieChartIcon from "../../public/icons/pie-chart.svg";
import SettingIcon from "../../public/icons/setting.svg";
import DesignIcon from "../../public/icons/design.svg";
import MonitorIcon from "../../public/icons/monitor-mobile.svg";
import RefreshIcon from "../../public/icons/refresh-square-2.svg";
import PlayIcon from "../../public/icons/play.svg";
import UserIcon from "../../public/icons/user-tag.svg";
import MoneyIcon from "../../public/icons/money.svg";
import SendIcon from "../../public/icons/send.svg";
import LayerIcon from "../../public/icons/layer.svg";
import CandleIcon from "../../public/icons/candle-2.svg";
import CategoryIcon from "../../public/icons/category-2.svg";

export type IconKeys =
  | "crm"
  | "pie-chart"
  | "setting"
  | "design"
  | "monitor"
  | "refresh"
  | "play"
  | "money"
  | "user"
  | "send"
  | "layer"
  | "candle"
  | "category";

const iconsMap: Record<IconKeys, React.FC<React.SVGAttributes<SVGAElement>>> = {
  crm: CRMIcon,
  "pie-chart": PieChartIcon,
  setting: SettingIcon,
  design: DesignIcon,
  monitor: MonitorIcon,
  refresh: RefreshIcon,
  play: PlayIcon,
  money: MoneyIcon,
  user: UserIcon,
  send: SendIcon,
  layer: LayerIcon,
  candle: CandleIcon,
  category: CategoryIcon,
};

const Icon: React.FC<{ name: IconKeys; [key: string]: unknown }> = ({
  name,
  ...rest
}) => {
  const Icon = iconsMap[name] ?? (() => null);
  return <Icon {...rest} />;
};

export default Icon;
