import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
        <td>{props.recipe.recipe_name}</td>
        <td>{props.recipe.recipe_ingredients}</td>
        <td>{props.recipe.recipe_steps}</td>
        <td>
            <div>
                <Link to={'/edit/' + props.recipe._id}>Edit</Link>
            </div>
            <button type='onClick' id={props.recipe._id}>Delete</button>
        </td>
    </tr>
)



export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            Recipes:[]
        };
    }

    onClick(e) {
        e.preventDefault();
        axios.delete(this.props.recipe._id)
        .then(res => {
            this.setState(previousState => {
                return {
                    Recipes: previousState.Recipes.filter(recipes => recipes._id !== this.props.recipe._id)
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    componentDidMount() {
        axios.get('http://localhost:4000/Recipes/')
            .then(response => {
                this.setState( {Recipes: response.data} );
            })
            .catch(function (error){
                console.log(error);
            })
        }

    recipeList() {
        return this.state.Recipes.map(function(currentRecipe, i){
            return <Recipe recipe={currentRecipe} key={i} />;
        })
    }
    
    render() {
        return (
            <div>
                {console.log(this.props)}
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
                    { this.recipeList()}
                </tbody>
            </table>
        </div>
        )
    }
}

