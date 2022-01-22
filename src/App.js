import React from 'react'
import {Switch,Route} from "react-router-dom"
import Layout from '../src/Container/Layout/index'
import './App.css'
import Home from '../src/Pages/Home'
import Products from '../src/Pages/Products'
import About from './Pages/About'





export default function App() {
    return (
        <>
            <Layout>
             <Switch>
                    <Route exact path='/'component={Home}/>
                    <Route exact path ='/products'component={Products}/>
                    <Route exact path ='/about' component={About}/>
            </Switch>
                    


            </Layout>




        </>
    )
}


