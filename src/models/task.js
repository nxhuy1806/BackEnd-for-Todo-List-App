import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class Task extends Model {
        static associate(models) {
            Task.belongsTo(models.TodoList, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    Task.init(
        {
            content: {
                type: DataTypes.STRING(100),
                validate: {
                    len: {
                        args: [1, 100],
                        msg: 'Task content must contain between 2 and 50 characters',
                    },
                },
            },
            checked:{
                type: DataTypes.BOOLEAN
            }
        },
        {
            sequelize,
            modelName: 'Task',
        }
    );
    return Task;
};