
// import React from "react";
// import PropTypes from "prop-types";

// const MealList = ({ category, RecommendedMealPlans }) => {
//   return (
//     <div>
//       <h2>{category}</h2>
//       <ul>
//         {RecommendedMealPlans.map((RecommendedMealPlan) => (
//           <li key={RecommendedMealPlan.id}>{RecommendedMealPlan.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// MealList.propTypes = {
//   category: PropTypes.string.isRequired,
//   RecommendedMealPlans: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//   })).isRequired,
// };

// export default MealList;


// import RecommendedMealPlans from "./Meals";

const MealList = ({ categories, meals, onEdit, onDelete }) => {
  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {meals.map((meal) => (
          <meals
            key={meal.id}
            meal={meals}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default MealList;
