import React, { Component } from 'react';
import axios from 'axios';

export default class EditRecipes extends Component {
    constructor(props) {
        super(props);

        this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this);
        this.onChangeRecipeSteps = this.onChangeRecipeSteps.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            recipe_name: '',
            recipe_ingredients: [],
            recipe_steps: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/Recipes/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    recipe_name: response.data.recipe_name,
                    recipe_ingredients: response.data.recipe_ingredients,
                    recipe_steps: response.data.recipe_steps
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeRecipeName(e){
        this.setState({
            recipe_name: e.target.value
        })
    }

    onChangeRecipeIngredients(e){
        this.setState({
            recipe_ingredients: e.target.value
        })
    }

    onChangeRecipeSteps(e){
        this.setState({
            recipe_steps: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            recipe_name: this.state.recipe_name,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_steps: this.state.recipe_steps
        };

        console.log(obj);
        axios.post('http://localhost:4000/Recipes/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <h3 align="center">Update Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.recipe_name}
                                onChange={this.onChangeRecipeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Ingredients: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.recipe_ingredients}
                                onChange={this.onChangeRecipeIngredients}
                                />
                    </div>
                    <div className="form-group">
                        <label>Steps: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.recipe_steps}
                                onChange={this.onChangeRecipeSteps}
                                />
                    </div>      
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}