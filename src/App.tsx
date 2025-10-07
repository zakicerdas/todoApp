import TodoList from './components/todoList'
import './App.css'

function App() {


  return (
    <>    
     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6">
        <TodoList />
      </div>
    </div>
       
    </>
  )
}

export default App
