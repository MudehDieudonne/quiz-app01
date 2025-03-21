export const fetchQuestions = async () => {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching questions:', error)
    return []
  }
}
