from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

# Load the model for embedding
model = SentenceTransformer("Alibaba-NLP/gte-base-en-v1.5")

# Define the retrieval and generation functions
def retrieveOutfitSuggestions(event):
    event_embedding = model.encode([event])
    D, I = index.search(event_embedding, k=5)  # Get top 5 suggestions
    recommendations = [documents[i] for i in I[0]]
    return recommendations