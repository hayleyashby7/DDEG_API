import Monster from "./Monster";
import Size from "./Size";
import Type from "./Type";

Size.belongsTo(Monster);
Monster.hasOne(Size);

Type.belongsTo(Monster);
Monster.hasOne(Type);

export default { Monster, Size, Type };