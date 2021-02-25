module.exports = (sequelize, DataTypes) => {
    let alias = "Actors"
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        created_at: {
            allowNull: true,
            type: DataTypes.STRING
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ranking: {
            type: DataTypes.DECIMAL 
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName: "actors",
        timestamps: true,
        underscored: true
    }

    const Actor = sequelize.define(alias, cols, config)
    return Actor
}