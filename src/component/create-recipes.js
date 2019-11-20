import React, { Component } from 'react';
import axios from 'axios';



export default class CreateRecipes extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onChangeSteps = this.onChangeSteps.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            ingredients: [],
            steps: [],
            _id: Number
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeIngredients(e) {
        this.setState({
            ingredients: e.target.value
        });
    }

    onChangeSteps(e) {
        this.setState({
            steps: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const newRecipe = {
            recipe_name: this.state.name,
            recipe_ingredients: this.state.ingredients,
            recipe_steps: this.state.steps,
        };

        axios.post('http://localhost:4000/Recipes/add', newRecipe)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            ingredients: [],
            steps: []
        })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Ingredients: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.ingredients}
                                onChange={this.onChangeIngredients}
                                />
                    </div>
                    <div className="form-group">
                        <label>Recipe: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.steps}
                                onChange={this.onChangeSteps}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Recipe" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}