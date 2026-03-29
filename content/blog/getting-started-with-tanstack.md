---
title: "Why Machine Learning Outperforms Building Codes in Structural Engineering"
date: "2025-03-15"
summary: "Our latest research shows ML models can predict beam-column joint shear strength with 40% better accuracy than traditional code equations. Here's what this means for structural design."
tags: ["Machine Learning", "Structural Engineering", "LSTM", "Research"]
author: "Mohammad Sadegh Barkhordari"
---

After spending months developing and testing predictive models for reinforced concrete beam-column joints, I've reached a conclusion that challenges how we've approached structural design for decades.

## The Problem with Empirical Equations

Every structural engineer knows the drill. You open your code book — ACI 318, Eurocode 8, or CSA A23.3 — and plug numbers into empirical equations. These formulas have served us well, but they come with a fundamental limitation: they consider only a handful of variables.
In our study of 270 experimental specimens, we found something troubling. **All six major design codes systematically overestimate shear strength** of exterior beam-column joints. The EN 1998-1 equation showed the lowest accuracy (R²=0.688), while even the best-performing code (CSA A23.3) achieved only R²=0.760.

## What Changed When We Used ML

We tested four machine learning approaches: Kriging, Bayesian ANN, Multi-kernel RVM, and LSTM neural networks. The results were striking.
The LSTM model achieved **R²=0.97** on testing data, a 28% improvement over the best code equation. More importantly, the prediction errors were dramatically lower.

## Why This Matters

This isn't about replacing engineers with algorithms. It's about giving engineers better tools. The ML models consider 13 input parameters versus 2-3 in code equations. They capture nonlinear interactions that empirical formulas simply cannot.
