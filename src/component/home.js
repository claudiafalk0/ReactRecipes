import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
        <td>{props.recipes.recipe_name}</td>
        <td>{props.recipes.recipe_ingredients}</td>
        <td>{props.recipes.recipe_steps}</td>
        <td>
            <div>
                <Link to={"/edit/"+props.recipe._id}>Edit</Link>
            </div>
            <Link to={"/delete/"+props.recipe._id}>Delete</Link>
        </td>
    </tr>
)


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipes:[]
        };
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.get('http://localhost:4000/Recipes/delete' + this.props.Recipe._id)
        .then(console.log("Deleted"))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        axios.get('http://localhost:4000/Recipes/')
            .then(response => {
                this.setState({ recipes: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    recipeList() {
        return this.state.recipes.map(function(currentRecipe, i){
            return <Recipe recipe={currentRecipe} key={i} />;
        })
    }
    render() {
        return (
            <div>
            <h3>My recipes</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Steps</th>
                    </tr>
                </thead>
                <tbody>
                    { this.recipeList() }
                </tbody>
            </table>
        </div>
        )
    }
}

