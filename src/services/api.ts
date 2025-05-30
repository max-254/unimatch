const API_URL = import.meta.env.PROD ? '/api' : 'http://localhost:5000/api';

export const fetchUniversities = async () => {
  const response = await fetch(`${API_URL}/universities`);
  if (!response.ok) {
    throw new Error('Failed to fetch universities');
  }
  return response.json();
};

export const fetchUniversity = async (id: string) => {
  const response = await fetch(`${API_URL}/universities/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch university');
  }
  return response.json();
};

export const fetchTestimonials = async () => {
  const response = await fetch(`${API_URL}/testimonials`);
  if (!response.ok) {
    throw new Error('Failed to fetch testimonials');
  }
  return response.json();
};