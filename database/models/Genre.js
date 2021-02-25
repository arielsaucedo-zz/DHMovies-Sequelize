module.exports = (sequelize, DataTypes) => {
    let alias = "Genres"
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        created_at: {
            allowNull: false,
            type: DataTypes.STRING
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ranking: {
            type: DataTypes.INTEGER 
        },
        active: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName: "genres",
        timestamps: true,
        underscored: true
    }

    const Genre = sequelize.define(alias, cols, config)
    return Genre
}