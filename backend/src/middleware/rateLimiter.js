import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit("my-limit-key");
    if (!success)
      return res
        .status(429)
        .json({ message: "Too many requests, please try later" });
    next();
  } catch (err) {
    console.error("Error with rateLimiter", err);
    next();
  }
};

export default rateLimiter;
