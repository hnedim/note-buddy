import Note from "../models/Note.js";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(201).json(notes);
  } catch (err) {
    console.error("Error in getAllNotes controller", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (err) {
    console.error("Error in createNote controller", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!note) {
      return res
        .status(404)
        .json({ message: "Note with that ID was not found." });
    }
    res.status(201).json(note);
  } catch (err) {
    console.error("Error in updateNote controller", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res
        .status(404)
        .json({ message: "Note with that ID was not found." });
    }
    res.status(201).json({ message: "Note succesfully deleted", note: note });
  } catch (err) {
    console.error("Error in deleteNote controller", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ message: "Note not found." });
    res.status(201).json(note);
  } catch (err) {
    console.error("Error in getNoteById controller", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
