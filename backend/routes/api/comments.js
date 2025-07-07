/**
 * Comments API routes.
 * 
 * This file defines endpoints for interacting with comments in the Anythink Market backend.
 * 
 * Endpoints:
 *   GET    /api/comments/        - Get all comments
 *   DELETE /api/comments/:id     - Delete a comment by its ID
 * 
 * Dependencies:
 *   - Express Router for routing
 *   - Mongoose for MongoDB interaction
 *   - Comment model (must be registered with mongoose)
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

/**
 * GET /api/comments/
 * Returns a list of all comments.
 * Response: JSON array of comment objects.
 */
router.get("/", (req, res) => {
    Comment.find()
        .then((comments) => {
        res.json(comments);
        })
        .catch((err) => {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
        });
})

/**
 * DELETE /api/comments/:id
 * Deletes a comment by its MongoDB ObjectId.
 * Params:
 *   - id: The ObjectId of the comment to delete.
 * Response:
 *   - 200: { message: "Comment deleted successfully" }
 *   - 404: { error: "Comment not found" }
 *   - 500: { error: "Internal server error" }
 */
router.delete("/:id", async (req, res) => {
    const commentId = req.params.id;

    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});
