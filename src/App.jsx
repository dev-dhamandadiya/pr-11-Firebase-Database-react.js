import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBook, getAllBooks, updateBook, deleteBook, } from "./feature/book/BookSlice.js";

function App() {
  const dispatch = useDispatch();

  const { books, loading } = useSelector(
    (state) => state.books
  );

  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
  });

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (editId) {
      console.log("Updating:", editId, formData);

      dispatch(
        updateBook({
          id: editId,
          book: formData,
        })
      );

      setEditId(null);
    } else {
      dispatch(createBook(formData));
    }

    setFormData({
      title: "",
      author: "",
      price: "",
    });

    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteBook(id));
    }
  };

  const handleEdit = (book) => {
    console.log(book);

    setEditId(book.id);
    console.log(editId);
    setFormData({
      title: book.title,
      author: book.author,
      price: book.price,
    });
  };
  const validateForm = () => {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Book title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author name is required";
    }

    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (Number(formData.price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8 text-slate-800">
          📚 Book Store Management
        </h1>

        {/* Form */}

        <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-5">
            {editId ? "✏️ Update Book" : "➕ Add New Book"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-3 gap-4"
          >
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              value={formData.title}
              onChange={handleChange}
              className={`border p-3 rounded-lg ${errors.title ? "border-red-500" : ""
                }`}
            />

            {errors.title && (
              <p className="text-red-500 text-sm">
                {errors.title}
              </p>
            )}
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              value={formData.author}
              onChange={handleChange}
              className={`border p-3 rounded-lg ${errors.author ? "border-red-500" : ""
                }`}
            />

            {errors.author && (
              <p className="text-red-500 text-sm">
                {errors.author}
              </p>
            )}

            <input
              type="number"
              name="price"
              placeholder="Book Price"
              value={formData.price}
              onChange={handleChange}
              className={`border p-3 rounded-lg ${errors.price ? "border-red-500" : ""
                }`}
            />

            {errors.price && (
              <p className="text-red-500 text-sm">
                {errors.price}
              </p>
            )}
            <button
              type="submit"
              className={`text-white py-3 rounded-lg font-semibold md:col-span-3 ${editId
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-indigo-600 hover:bg-indigo-700"
                }`}
            >
              {editId ? "Update Book" : "Add Book"}
            </button>
          </form>
        </div>

        {/* Table */}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-5 border-b flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-700">
              📚 Book Collection
            </h2>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Total Books : {books.length}
            </span>
          </div>

          {loading ? (
            <div className="p-10 text-center text-xl">
              Loading...
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-4">Sr No</th>
                    <th className="p-4">Title</th>
                    <th className="p-4">Author</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {books.length > 0 ? (
                    books.map((book, index) => (
                      <tr
                        key={book.id}
                        className="border-b hover:bg-slate-50"
                      >
                        <td className="p-4 text-center">
                          {index + 1}
                        </td>

                        <td className="p-4 font-medium">
                          {book.title}
                        </td>

                        <td className="p-4">
                          {book.author}
                        </td>

                        <td className="p-4 text-green-600 font-bold">
                          ₹{book.price}
                        </td>

                        <td className="p-4">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleEdit(book)}
                              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
                            >
                              Edit
                            </button>

                            <button
                              onClick={() => handleDelete(book.id)}
                              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="text-center p-8 text-slate-500"
                      >
                        No Books Found 📕
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;