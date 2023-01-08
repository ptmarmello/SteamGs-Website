import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { width } from '@mui/system';
import { StepLabel } from '@mui/material';

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
type NLStepper ={
  stepData: List;
  son?:Boolean;
  setLevel?: Function;
  currentLevel?: number;  
}


export default function NonLinearStepper({stepData, son, setLevel, currentLevel}: NLStepper) {

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return stepData.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          stepData.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);

    if( completedSteps() === totalSteps()){
      setLevel(currentLevel + 1);
      console.log(currentLevel)
    }

    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setLevel(currentLevel - 1);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%', backgroundColor:'transparent' }}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical" 
        // alternativeLabel={}
        // connector={}
      >
        {
          stepData.map((step, id) => (  
            <Step key={id} completed={completed[id]} sx={{ padding:'0.5rem', ":hover" :{
              backgroundColor: '#202021',
              borderRadius: '8px',
            } }}>
              <StepLabel color='inherit' onClick={handleStep(id)} sx={{ paddingLeft:'0.5rem', cursor:"pointer"

              }}
                // StepIconComponent={}
              >
                <Typography style={{ color:'#fdfdfa' }} >
                  {step.title}
                </Typography>
              </StepLabel>
              {/* <StepButton color='inherit' onClick={handleStep(id)} sx={{ paddingLeft:'0.5rem' }}>
                {step.title.toUpperCase()}
              </StepButton> */}
              {
                step.substeps && !activeStep && <NonLinearStepper stepData={step.substeps} son={true}/>
              }
            </Step>
            )
          )
        }
      </Stepper>
      {
        !son &&
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {/* {
                  activeStep === totalSteps() &&
                } */}
                  <Button onClick={handleNext} sx={{ mr: 1 }} disabled={ activeStep === totalSteps() -1 } >
                    Next
                  </Button>


                {activeStep !== stepData.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block', color:'whitesmoke' }}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete} 
                      // colocar aqui que se já tiver completo o passo, não dá pra apertar em completar novamente
                    >
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      }
    </Box>
  );
}