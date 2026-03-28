---
title: "SciGraph: Knowledge Graph for Research Discovery"
description: "A dynamic knowledge graph visualization tool that maps relationships between scientific concepts, authors, and institutions across 10M+ papers from the Semantic Scholar Open Research Corpus."
tags: ["Graph Databases", "Neo4j", "Python", "D3.js", "Knowledge Representation"]
github: "https://github.com/dr-alexchen/scigraph"
---

SciGraph ingests the Semantic Scholar Open Research Corpus and constructs a queryable knowledge graph linking papers, authors, venues, concepts, and funding sources. An interactive D3-based frontend enables researchers to visually explore the intellectual landscape of a field and discover non-obvious connections.

**Technical highlights:**
- Processes 10M+ papers using distributed Spark pipelines
- Neo4j graph database with custom Cypher query interface
- Force-directed layout with community detection (Louvain algorithm)
- REST API consumed by CollabSense for related work suggestions
