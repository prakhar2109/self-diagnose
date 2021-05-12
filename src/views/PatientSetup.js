import React from 'react'
import Select from 'react-select'
import gender_option from '../json/gender.json'
import symptoms_option from '../json/symptoms.json'


const custom_styles = {
    control: styles => ({ ...styles, background: 'transparent', padding: '10px' })
  }
  
export default class PatientSetup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        patientname:'',
        age:'',
        gender:'',
        symptoms:''
    }
  }

  getGender = () => {
    return gender_option.map(gender => ({
      value: gender.name,
      label: gender.name
    }))
  }
  getSymtoms = () => {
    return symptoms_option.map(symptoms => ({
      value: symptoms.name,
      label: symptoms.name
    }))
  }

   handlepatientSubmit=()=>{
        let data={
            patientname:this.state.patientname
        }
        this.props.handleNameSetup(data)
    }   
    handleageSubmit=()=>{
        let data={
            age:this.state.age
        }
        this.props.handleAgeSetup(data)
    }   

    handlegenderSubmit=()=>{
        let data={
            gender:this.state.gender.value
        }
        this.props.handlegenderSetup(data)
    }   

    handlesymptomsSubmit=()=>{
        let data={
            symptoms:this.state.symptoms.value
        }
        this.props.handlesymtomsSetup(data)
    }   
    handleChange=(e)=>{
        const name = e.target.name
        let value = e.target.value
        this.setState({ [name]: value })
    }
    handleSelectGenderChange = selectedOption => {
        this.setState({ gender: selectedOption })
      }

      handleSelectSymtomsChange = selectedOption => {
        this.setState({ symptoms: selectedOption })
      }

    handlebackSubmit=()=>{

        this.props.handlebackSubmit()
    }

  render() {



   
    return (
     <div>
         
         {this.props.activeStep===0 ?
         <>
         Name: <input name='patientname' value={this.state.patientname} onChange={this.handleChange}/>
         <div onClick={this.handlepatientSubmit}> NEXT </div>
     
         </>
         :null}

         {this.props.activeStep===1 ?
         <>
         Age: <input name='age' value={this.state.age} onChange={this.handleChange}/>
         <div onClick={this.handleageSubmit}> NEXT </div>
         <div onClick={this.handlebackSubmit}> BACK </div>
         </>
         :null} 

        {this.props.activeStep===2 ?
         <>
         Gender: 
         <Select
                    styles={custom_styles}
                    value={this.state.gender}
                    onChange={event => {
                      this.handleSelectGenderChange(event)
                    }}
                    options={this.getGender()}
                    placeholder="Gender"
                  />
         <div onClick={this.handlegenderSubmit}> NEXT </div>
         <div onClick={this.handlebackSubmit}> BACK </div>
         </>
         :null} 

        {this.props.activeStep===3 ?
        <>
        Symptoms
        <Select
                    styles={custom_styles}
                    value={this.state.symptoms}
                    onChange={event => {
                      this.handleSelectSymtomsChange(event)
                    }}
                    options={this.getSymtoms()}
                    placeholder="symptoms"
                  />
        <div onClick={this.handlesymptomsSubmit}> SUBMIT </div>
        <div onClick={this.handlebackSubmit}> BACK </div>
        </>
        :null} 
       

     </div>
    )
  }
}
