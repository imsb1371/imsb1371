const allBlogs = [
  {
    "title": "How Machine Learning Can Improve Predictions Beyond Building Codes in Structural Engineering",
    "date": "2025-03-15",
    "summary": "Our recent research shows ML models can significantly improve prediction accuracy (e.g., R² from 0.76 to 0.97) for beam-column joint shear strength compared to traditional code equations.",
    "tags": [
      "Machine Learning",
      "Structural Engineering",
      "LSTM",
      "Research"
    ],
    "author": "Mohammad Sadegh Barkhordari",
    "content": "After spending months developing and testing predictive models for reinforced concrete beam-column joints, I've reached findings that challenge some conventional approaches to structural design.\r\n\r\n## The Problem with Empirical Equations\r\n\r\nEvery structural engineer knows the drill. You open your code book — ACI 318, Eurocode 8, or CSA A23.3 — and plug numbers into empirical equations. These formulas have served us well, but they come with a fundamental limitation: they consider only a small number of variables.\r\n\r\nIn our study of 270 experimental specimens, we observed a consistent trend: within the scope of this dataset, commonly used design codes tended to overestimate the shear strength of exterior beam-column joints. The EN 1998-1 equation showed the lowest accuracy (R² = 0.688), while the best-performing code (CSA A23.3) achieved R² = 0.760.\r\n\r\n## What Changed When We Used ML\r\n\r\nWe tested four machine learning approaches: Kriging, Bayesian ANN, Multi-kernel RVM, and LSTM neural networks. The results were notable.\r\n\r\nThe LSTM model achieved R² = 0.97 on testing data, representing a significant improvement in predictive accuracy compared to traditional code equations. Prediction errors were also substantially reduced.\r\n\r\nIt should be noted that the dataset size (270 specimens) is relatively limited, and model performance should be interpreted with this consideration in mind.\r\n\r\n## Why This Matters\r\n\r\nThis isn't about replacing engineers or design codes. Structural design codes are intentionally conservative and grounded in safety considerations.\r\n\r\nInstead, these findings highlight the potential of machine learning as a complementary tool. ML models can incorporate a larger number of input parameters (13 in this study versus 2–3 in typical code equations) and capture complex nonlinear interactions that empirical formulas cannot.\r\n\r\nSuch approaches may support future improvements in code development, enhance engineering judgment, and contribute to more informed decision-making — but they should not be used in isolation without proper validation and compliance with existing standards.",
    "_meta": {
      "filePath": "beam-column-joint-strength.md",
      "fileName": "beam-column-joint-strength.md",
      "directory": ".",
      "extension": "md",
      "path": "beam-column-joint-strength"
    }
  },
  {
    "title": "Understanding the Complexity of Predicting Soil Remediation Efficiency with Interpretable Machine Learning",
    "date": "2024-08-22",
    "summary": "Electrokinetic remediation is influenced by many interacting variables, making prediction challenging. Interpretable machine learning provides a way to model these complex systems while offering insight into key driving factors.",
    "tags": [
      "Machine Learning",
      "Environmental Engineering",
      "Electrokinetic Remediation",
      "SHAP"
    ],
    "author": "Dr. Mohammad Sadegh Barkhordari",
    "content": "Electrokinetic remediation (EKR) offers a promising approach for soil cleanup, but predicting its performance remains a significant challenge. Interpretable machine learning provides a way to model complex systems while still offering insight into the factors that drive results.\r\n\r\nThere is a persistent challenge in environmental engineering: balancing the complexity of physical systems with the need for reliable prediction. Electrokinetic remediation, for example, is conceptually straightforward — applying an electric field to mobilize contaminants — yet its real-world performance depends on a dense network of interacting variables.\r\n\r\nWhile individual experimental studies can provide valuable insights into how soil properties, electrode configurations, and chemical conditions interact, extending these findings across a wide range of scenarios becomes increasingly difficult using traditional analytical approaches.\r\n\r\n## The Complexity Problem\r\n\r\nA common approach has been empirical modeling: conducting controlled experiments, isolating variables, and deriving simplified relationships. This strategy works well in constrained settings but becomes less effective when multiple factors interact nonlinearly.\r\n\r\nIn EKR systems, parameters such as electrode spacing, soil pH, moisture content, applied voltage, and electrolyte type influence outcomes simultaneously. Their combined effects are difficult to isolate, making it challenging to generalize conclusions beyond specific experimental conditions.\r\n\r\n## What Machine Learning Offers\r\n\r\nAn alternative approach is to explicitly model this complexity. By applying machine learning techniques to aggregated experimental datasets, it is possible to capture nonlinear relationships among multiple variables.\r\n\r\nIn this work, ensemble methods — particularly gradient boosting and extreme gradient boosting — demonstrated strong predictive capability within the scope of the available dataset. More importantly, interpretability techniques such as SHAP enable deeper analysis of model behavior.\r\n\r\nThese tools allow us to identify influential factors — including electrode spacing, electrode surface area, electrolyte composition, and treatment duration — and examine how they contribute to predicted remediation efficiency. This represents a shift from purely predictive modeling toward more interpretable, data-driven system analysis.\r\n\r\n## Honest Caveats\r\n\r\nThis approach is not without limitations. Machine learning models are highly dependent on the quality, size, and representativeness of the underlying dataset. Limited or biased data can lead to unreliable or non-generalizable results.\r\n\r\nFurthermore, interpretability methods such as SHAP provide approximations of model behavior and should not be interpreted as definitive evidence of causal relationships.\r\n\r\nAs such, these models are best viewed as decision-support tools. They can enhance understanding and guide analysis, but should be used alongside domain expertise and not as a replacement for established engineering judgment or validated methodologies.",
    "_meta": {
      "filePath": "SoilRemediationEfficiency.md",
      "fileName": "SoilRemediationEfficiency.md",
      "directory": ".",
      "extension": "md",
      "path": "SoilRemediationEfficiency"
    }
  },
  {
    "title": "How I Build More Reliable Structural Damage Models (and What Changed My Approach)",
    "date": "2024-05-14",
    "summary": "A practical reflection on designing machine learning systems for structural damage identification — evolving from single-model approaches to more robust ensemble strategies.",
    "tags": [
      "Machine Learning",
      "Computer Vision",
      "Structural Health Monitoring",
      "Deep Learning"
    ],
    "author": "Dr. Mohammad Sadegh Barkhordari",
    "content": 'Early structural damage models often appear promising during development. In our research, deep convolutional neural networks trained on structured datasets achieved reasonable validation performance.\r\n\r\nHowever, when evaluated more rigorously, single models can show limitations — including reduced robustness and difficulty handling complex or ambiguous damage patterns.\r\n\r\nHere is how this approach evolved based on our findings.\r\n\r\n## Start with Reliability, Not Just Accuracy\r\n\r\nOptimizing a single metric such as accuracy is often insufficient. Structural damage detection requires consistent performance across varying conditions and damage types.\r\n\r\nDifferent damage categories (flexural, shear, combined) exhibit complex visual characteristics. In particular, combined damage cases are more difficult to classify reliably, highlighting the importance of robustness beyond average accuracy.\r\n\r\n## One Model Is Rarely Enough\r\n\r\nRather than relying on a single architecture, our work explored combining multiple deep learning models.\r\n\r\nDifferent models capture different aspects of the data. Ensemble approaches — including simple averaging, weighted averaging, and stacking — can improve performance by integrating these complementary strengths.\r\n\r\nIn our study (based on 4585 structural images), ensemble models consistently outperformed individual models, improving classification accuracy by several percentage points.\r\n\r\n## Weighting Matters More Than You Think\r\n\r\nSimple averaging assumes equal contribution from all models. However, performance varies across sub-models.\r\n\r\nWeighted averaging — especially when optimized using algorithms such as differential evolution — allows stronger models to contribute more effectively. This leads to measurable improvements in prediction accuracy.\r\n\r\n## Learn the Combination, Don’t Handcraft It\r\n\r\nStacking extends this idea by training a meta-model to combine predictions.\r\n\r\nThis approach captures nonlinear relationships between model outputs and often provides more stable performance, particularly when combining heterogeneous models.\r\n\r\n## Evaluate Like It’s a Real System\r\n\r\nRobust evaluation is critical. In our study, performance was assessed using confusion matrices along with accuracy, precision, and recall metrics.\r\n\r\nThese metrics revealed that certain damage types — especially combined failures — remain challenging, even for advanced models.\r\n\r\nRepeated validation strategies and careful monitoring of overfitting are essential to ensure reliable performance.\r\n\r\n## Complexity Is Worth It — If It Improves Reliability\r\n\r\nEnsemble systems introduce additional complexity, but they can significantly improve reliability.\r\n\r\nIn applications such as post-earthquake damage assessment, even modest improvements (e.g., several percentage points in accuracy and recall) can enhance decision-making.\r\n\r\nThat said, these models should be treated as decision-support tools. They are not a replacement for engineering judgment, field inspection, or established safety assessment procedures.\r\n\r\n## Source\r\n\r\nThis article is based on:\r\nBarkhordari, M. S., Armaghani, D. J., & Asteris, P. G. (2022).\r\n"Structural Damage Identification Using Ensemble Deep Convolutional Neural Network Models."\r\nComputer Modeling in Engineering & Sciences.',
    "_meta": {
      "filePath": "Structural-Damage-Models.md",
      "fileName": "Structural-Damage-Models.md",
      "directory": ".",
      "extension": "md",
      "path": "Structural-Damage-Models"
    }
  }
];
export {
  allBlogs as a
};
