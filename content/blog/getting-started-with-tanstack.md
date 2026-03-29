---
title: "How Machine Learning Can Improve Predictions Beyond Building Codes in Structural Engineering"
date: "2025-03-15"
summary: "Our recent research shows ML models can significantly improve prediction accuracy (e.g., R² from 0.76 to 0.97) for beam-column joint shear strength compared to traditional code equations."
tags: ["Machine Learning", "Structural Engineering", "LSTM", "Research"]
author: "Mohammad Sadegh Barkhordari"
---

After spending months developing and testing predictive models for reinforced concrete beam-column joints, I've reached findings that challenge some conventional approaches to structural design.

## The Problem with Empirical Equations

Every structural engineer knows the drill. You open your code book — ACI 318, Eurocode 8, or CSA A23.3 — and plug numbers into empirical equations. These formulas have served us well, but they come with a fundamental limitation: they consider only a small number of variables.

In our study of 270 experimental specimens, we observed a consistent trend: within the scope of this dataset, commonly used design codes tended to overestimate the shear strength of exterior beam-column joints. The EN 1998-1 equation showed the lowest accuracy (R² = 0.688), while the best-performing code (CSA A23.3) achieved R² = 0.760.

## What Changed When We Used ML

We tested four machine learning approaches: Kriging, Bayesian ANN, Multi-kernel RVM, and LSTM neural networks. The results were notable.

The LSTM model achieved R² = 0.97 on testing data, representing a significant improvement in predictive accuracy compared to traditional code equations. Prediction errors were also substantially reduced.

It should be noted that the dataset size (270 specimens) is relatively limited, and model performance should be interpreted with this consideration in mind.

## Why This Matters

This isn't about replacing engineers or design codes. Structural design codes are intentionally conservative and grounded in safety considerations.

Instead, these findings highlight the potential of machine learning as a complementary tool. ML models can incorporate a larger number of input parameters (13 in this study versus 2–3 in typical code equations) and capture complex nonlinear interactions that empirical formulas cannot.

Such approaches may support future improvements in code development, enhance engineering judgment, and contribute to more informed decision-making — but they should not be used in isolation without proper validation and compliance with existing standards.
