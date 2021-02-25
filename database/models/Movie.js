module.exports = (sequelize, DataTypes) => {
    let alias = "Movies"
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
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL 
        },
        awards: {
            type: DataTypes.DECIMAL 
        },
        release_date: {
            type: DataTypes.DATE,
        },
        length: {
            type: DataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName: "movies",
        timestamps: true,
        underscored: true
    }

    const Movie = sequelize.define(alias, cols, config)

    return Movie
}