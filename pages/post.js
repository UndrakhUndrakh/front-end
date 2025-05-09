import { useState } from "react";
import axios from "axios";

export default function Post() {
  const [create, setCreate] = useState(false);
  const [name, setName] = useState("");
  const handleSubmit = () =>
    axios.post("http://192.168.4.165:8000/createUsers", {
      name,
    });
    console.log(name);
  return (
    <div className="p-4">
      <div className="flex items-center space-x-4">
        <p className="text-3xl font-bold">Post page:</p>
        <button
          onClick={() => setCreate((o) => !o)}
          className="bg-blue-400 rounded-lg p-4 text-white text-xl"
        >
          Create account
        </button>
      </div>

      {create === true && (
        <div className="m-4">
          <div>
            <label className="text-3xl font-semibold">Ner:</label>
            <input
              type="Text"
              onChange={(e) => setName(e.target.value)}
              className="bg-white rounded-lg border p-4 ml-4 bg-gray-200 text-2xl"
              placeholder="Ner oruulna uu"
            ></input>
          </div>

          <div>
            <div className="p-4">
              <label className="text-3xl font-semibold ">Ovog:</label>
              <input
                type="Text"
                onChange={(e) => setName(e.target.value)}
                className="bg-white rounded-lg border p-4 ml-4 bg-gray-200 text-2xl"
                placeholder="Ovgo oruulna uu"
              ></input>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-red-400 rounded-2xl p-3 text-white text-2xl"
            >
              Hadgalah
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
