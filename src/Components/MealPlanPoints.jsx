import React from 'react';
import { useNavigate } from 'react-router-dom';


function MealPlanPoints() {

    // Get the history object from React Router
    const navigate = useNavigate();

    function createMealPlan() {

        // to navigate to the meal plan page
        navigate('/mealplan');
    }

    
    function mealHistory() {
        // to navigate to the meal history page
        navigate('/saved');
    }

    return(
        <>
            <div className='flex justify-center items-center'>
                <div className="bg-black bg-opacity-50 text-white rounded-xl  inline-block w-80 h-46 border pb-2 text-left px-3 pt-3 mt-8">
                    <h1 className="font-semibold text-2xl ">0 Meal Plan</h1>
                    <p className="  py-1 text-sm pb-1 ">Ready for a delicious meal? Earn 20 points per meal.</p>
                    <button onClick={createMealPlan} className="  bg-green-700 p-1 text-white  hover:bg-green-200 hover:text-black w-3/6 px-2  mr-5  rounded-xl  text-sm ">Create Meal Plan</button>
                    
                </div>
            </div>
            
        </>
    )
}

export default MealPlanPoints;