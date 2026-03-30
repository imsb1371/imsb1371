const e=[{title:"How Machine Learning Can Improve Predictions Beyond Building Codes in Structural Engineering",date:"2025-03-15",summary:"Our recent research shows ML models can significantly improve prediction accuracy (e.g., R² from 0.76 to 0.97) for beam-column joint shear strength compared to traditional code equations.",tags:["Machine Learning","Structural Engineering","LSTM","Research"],author:"Mohammad Sadegh Barkhordari",content:`After spending months developing and testing predictive models for reinforced concrete beam-column joints, I've reached findings that challenge some conventional approaches to structural design.\r
\r
## The Problem with Empirical Equations\r
\r
Every structural engineer knows the drill. You open your code book — ACI 318, Eurocode 8, or CSA A23.3 — and plug numbers into empirical equations. These formulas have served us well, but they come with a fundamental limitation: they consider only a small number of variables.\r
\r
In our study of 270 experimental specimens, we observed a consistent trend: within the scope of this dataset, commonly used design codes tended to overestimate the shear strength of exterior beam-column joints. The EN 1998-1 equation showed the lowest accuracy (R² = 0.688), while the best-performing code (CSA A23.3) achieved R² = 0.760.\r
\r
## What Changed When We Used ML\r
\r
We tested four machine learning approaches: Kriging, Bayesian ANN, Multi-kernel RVM, and LSTM neural networks. The results were notable.\r
\r
The LSTM model achieved R² = 0.97 on testing data, representing a significant improvement in predictive accuracy compared to traditional code equations. Prediction errors were also substantially reduced.\r
\r
It should be noted that the dataset size (270 specimens) is relatively limited, and model performance should be interpreted with this consideration in mind.\r
\r
## Why This Matters\r
\r
This isn't about replacing engineers or design codes. Structural design codes are intentionally conservative and grounded in safety considerations.\r
\r
Instead, these findings highlight the potential of machine learning as a complementary tool. ML models can incorporate a larger number of input parameters (13 in this study versus 2–3 in typical code equations) and capture complex nonlinear interactions that empirical formulas cannot.\r
\r
Such approaches may support future improvements in code development, enhance engineering judgment, and contribute to more informed decision-making — but they should not be used in isolation without proper validation and compliance with existing standards.`,_meta:{filePath:"beam-column-joint-strength.md",fileName:"beam-column-joint-strength.md",directory:".",extension:"md",path:"beam-column-joint-strength"}},{title:"Understanding the Complexity of Predicting Soil Remediation Efficiency with Interpretable Machine Learning",date:"2024-08-22",summary:"Electrokinetic remediation is influenced by many interacting variables, making prediction challenging. Interpretable machine learning provides a way to model these complex systems while offering insight into key driving factors.",tags:["Machine Learning","Environmental Engineering","Electrokinetic Remediation","SHAP"],author:"Dr. Mohammad Sadegh Barkhordari",content:`Electrokinetic remediation (EKR) offers a promising approach for soil cleanup, but predicting its performance remains a significant challenge. Interpretable machine learning provides a way to model complex systems while still offering insight into the factors that drive results.\r
\r
There is a persistent challenge in environmental engineering: balancing the complexity of physical systems with the need for reliable prediction. Electrokinetic remediation, for example, is conceptually straightforward — applying an electric field to mobilize contaminants — yet its real-world performance depends on a dense network of interacting variables.\r
\r
While individual experimental studies can provide valuable insights into how soil properties, electrode configurations, and chemical conditions interact, extending these findings across a wide range of scenarios becomes increasingly difficult using traditional analytical approaches.\r
\r
## The Complexity Problem\r
\r
A common approach has been empirical modeling: conducting controlled experiments, isolating variables, and deriving simplified relationships. This strategy works well in constrained settings but becomes less effective when multiple factors interact nonlinearly.\r
\r
In EKR systems, parameters such as electrode spacing, soil pH, moisture content, applied voltage, and electrolyte type influence outcomes simultaneously. Their combined effects are difficult to isolate, making it challenging to generalize conclusions beyond specific experimental conditions.\r
\r
## What Machine Learning Offers\r
\r
An alternative approach is to explicitly model this complexity. By applying machine learning techniques to aggregated experimental datasets, it is possible to capture nonlinear relationships among multiple variables.\r
\r
In this work, ensemble methods — particularly gradient boosting and extreme gradient boosting — demonstrated strong predictive capability within the scope of the available dataset. More importantly, interpretability techniques such as SHAP enable deeper analysis of model behavior.\r
\r
These tools allow us to identify influential factors — including electrode spacing, electrode surface area, electrolyte composition, and treatment duration — and examine how they contribute to predicted remediation efficiency. This represents a shift from purely predictive modeling toward more interpretable, data-driven system analysis.\r
\r
## Honest Caveats\r
\r
This approach is not without limitations. Machine learning models are highly dependent on the quality, size, and representativeness of the underlying dataset. Limited or biased data can lead to unreliable or non-generalizable results.\r
\r
Furthermore, interpretability methods such as SHAP provide approximations of model behavior and should not be interpreted as definitive evidence of causal relationships.\r
\r
As such, these models are best viewed as decision-support tools. They can enhance understanding and guide analysis, but should be used alongside domain expertise and not as a replacement for established engineering judgment or validated methodologies.`,_meta:{filePath:"SoilRemediationEfficiency.md",fileName:"SoilRemediationEfficiency.md",directory:".",extension:"md",path:"SoilRemediationEfficiency"}},{title:"How I Build More Reliable Structural Damage Models (and What Changed My Approach)",date:"2024-05-14",summary:"A practical reflection on designing machine learning systems for structural damage identification — evolving from single-model approaches to more robust ensemble strategies.",tags:["Machine Learning","Computer Vision","Structural Health Monitoring","Deep Learning"],author:"Dr. Mohammad Sadegh Barkhordari",content:`Early structural damage models often appear promising during development. In our research, deep convolutional neural networks trained on structured datasets achieved reasonable validation performance.\r
\r
However, when evaluated more rigorously, single models can show limitations — including reduced robustness and difficulty handling complex or ambiguous damage patterns.\r
\r
Here is how this approach evolved based on our findings.\r
\r
## Start with Reliability, Not Just Accuracy\r
\r
Optimizing a single metric such as accuracy is often insufficient. Structural damage detection requires consistent performance across varying conditions and damage types.\r
\r
Different damage categories (flexural, shear, combined) exhibit complex visual characteristics. In particular, combined damage cases are more difficult to classify reliably, highlighting the importance of robustness beyond average accuracy.\r
\r
## One Model Is Rarely Enough\r
\r
Rather than relying on a single architecture, our work explored combining multiple deep learning models.\r
\r
Different models capture different aspects of the data. Ensemble approaches — including simple averaging, weighted averaging, and stacking — can improve performance by integrating these complementary strengths.\r
\r
In our study (based on 4585 structural images), ensemble models consistently outperformed individual models, improving classification accuracy by several percentage points.\r
\r
## Weighting Matters More Than You Think\r
\r
Simple averaging assumes equal contribution from all models. However, performance varies across sub-models.\r
\r
Weighted averaging — especially when optimized using algorithms such as differential evolution — allows stronger models to contribute more effectively. This leads to measurable improvements in prediction accuracy.\r
\r
## Learn the Combination, Don’t Handcraft It\r
\r
Stacking extends this idea by training a meta-model to combine predictions.\r
\r
This approach captures nonlinear relationships between model outputs and often provides more stable performance, particularly when combining heterogeneous models.\r
\r
## Evaluate Like It’s a Real System\r
\r
Robust evaluation is critical. In our study, performance was assessed using confusion matrices along with accuracy, precision, and recall metrics.\r
\r
These metrics revealed that certain damage types — especially combined failures — remain challenging, even for advanced models.\r
\r
Repeated validation strategies and careful monitoring of overfitting are essential to ensure reliable performance.\r
\r
## Complexity Is Worth It — If It Improves Reliability\r
\r
Ensemble systems introduce additional complexity, but they can significantly improve reliability.\r
\r
In applications such as post-earthquake damage assessment, even modest improvements (e.g., several percentage points in accuracy and recall) can enhance decision-making.\r
\r
That said, these models should be treated as decision-support tools. They are not a replacement for engineering judgment, field inspection, or established safety assessment procedures.\r
\r
## Source\r
\r
This article is based on:\r
Barkhordari, M. S., Armaghani, D. J., & Asteris, P. G. (2022).\r
"Structural Damage Identification Using Ensemble Deep Convolutional Neural Network Models."\r
Computer Modeling in Engineering & Sciences.`,_meta:{filePath:"Structural-Damage-Models.md",fileName:"Structural-Damage-Models.md",directory:".",extension:"md",path:"Structural-Damage-Models"}}];export{e as a};
