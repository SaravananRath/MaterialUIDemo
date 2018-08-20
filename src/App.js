import React, { Component, Fragment } from 'react';
// import './App.css';
// import Header from './layouts/Header'
// import Footer from './layouts/Footer'
import { Header, Footer } from './layouts'
import Exercises from './Exercises'
import { muscles, exercises } from "./store";

class App extends Component {
    state = {
        exercises,
        exercise: {}
    }
    getExercisesByMuscles() {
        return this.state.exercises.reduce((a, c) => {
            const { muscles } = c
            a[muscles] = a[muscles] ? [...a[muscles], c] : [c]
            return a
        }, {})
    }
    handleSelect = category => {
        this.setState({
            category
        })
    }
    handleExercise = id => {
        this.setState(({ exercises }) => ({
            exercise: exercises.find(ex => ex.id === id)
        }))
    }
    render() {
        // console.log(Object.values(this.getExercisesByMuscles()))
        console.log(Object.entries(this.getExercisesByMuscles()))
        const exercises = Object.entries(this.getExercisesByMuscles())
        const { category, exercise } = this.state

        return (
            <Fragment>
                <Header />
                <Exercises
                    exercise={exercise}
                    exercises={exercises}
                    category={category}
                    onSelectExercise={this.handleExercise}
                />
                <Footer
                    muscles={muscles}
                    onSelect={this.handleSelect}
                    category={category}
                />
            </Fragment>
        );
    }
}

export default App;
