export const fetchCategories = async () => {
  try {
    const response = await fetch('https://opentdb.com/api_category.php')
    const data = await response.json()
    return data.trivia_categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export const fetchQuestions = async (category, difficulty) => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=boolean`
    );
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching questions:', error)
    return []
  }
}
