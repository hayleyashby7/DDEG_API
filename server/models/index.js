import Monster from './Monster';
import Size from './Size';
import Type from './Type';
import Action from './Action';
import Language from './Language';
import Sense from './Sense';
import Skill from './Skill';
import Speed from './Speed';
import Stat from './Stat';

Size.belongsTo(Monster);
Monster.hasOne(Size);

Type.belongsTo(Monster);
Monster.hasOne(Type);

Action.belongsTo(Monster);
Monster.hasMany(Action);

Language.belongsToMany(Monster, { through: 'monster_languages' });
Monster.belongsToMany(Language, { through: 'monster_languages' });

Sense.belongsToMany(Monster, { through: 'monster_senses' });
Monster.belongsToMany(Sense, { through: 'monster_senses' });

Skill.belongsToMany(Monster, { through: 'monster_skills' });
Monster.belongsToMany(Skill, { through: 'monster_skills' });

Speed.belongsToMany(Monster, { through: 'monster_speeds' });
Monster.belongsToMany(Speed, { through: 'monster_speeds' });

Stat.belongsToMany(Monster, { through: 'monster_stats' });
Monster.belongsToMany(Stat, { through: 'monster_stats' });

export default { Monster, Size, Type, Action, Language, Sense };
