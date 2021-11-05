class ResourceNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "ResourceNotFoundError";
  }
};

// TODO check on the export here
module.exports = {
  ResourceNotFoundError
};
