import React, { Component } from 'react';

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
            steps: []
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

        console.log('Form submitted');
        console.log(`Name: ${this.state.name}`);
        console.log(`ingredients: ${this.state.ingredients}`);
        console.log(`steps: ${this.state.steps}`);

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