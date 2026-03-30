---
title: "ML-PHL: Machine Learning Model for Plastic Hinge Length Prediction in Reinforced Concrete Walls"
description: "A Random Forest-based prediction model for estimating plastic hinge length (PHL) of reinforced concrete structural walls using 721 planar and nonplanar wall samples."
tags: ["Machine Learning", "Structural Engineering", "Random Forest", "SHAP", "Python", "Seismic Design"]
liveUrl: "https://doi.org/10.1177/13694332231174252"
---

ML-PHL leverages ensemble machine learning to predict plastic hinge length (PHL) of reinforced concrete structural walls (RCSWs), a critical parameter for seismic performance assessment. Trained on a comprehensive database of 721 planar and nonplanar wall specimens, the model processes key design parameters—including wall geometry, axial load ratio, and shear stress variables—to deliver accurate, physics-informed PHL estimates that surpass traditional empirical formulations.

**Technical highlights:**
- Database of 721 RCSW samples covering rectangular, H-shaped, Barbell, and U-shaped sections
- Four ML algorithms benchmarked: XGBoost, CatBoost, Random Forest (RF), and Genetic Programming
- SHAP (SHapley Additive exPlanation) framework for model interpretability and feature importance ranking
- Key predictors identified: wall effective height (M/V), wall length, and axial load ratio
