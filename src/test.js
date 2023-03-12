// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const bucketName = 'gcloud-translate-storage';
const fileName = 'aacf_sp23_tabling_flier.png';
async function test(x) {
    console.log(x)
    // Read a remote image as a text document
    const [result] = await client.documentTextDetection(
        `gs://gcloud-translate-storage/aacf_sp23_tabling_flier.png`
    );
    const fullTextAnnotation = result.fullTextAnnotation;
    console.log(fullTextAnnotation.text);
}
