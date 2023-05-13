import Monster from './Monster';
import Size from './Size';

Size.hasMany(Monster);
Monster.belongsTo(Size);

export default { Monster, Size };
