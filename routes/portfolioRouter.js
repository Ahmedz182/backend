const router = require("express").Router();
const { Project } = require("../model/data/Projects.js");
const { Experience } = require("../model/data/Experiences");
const { Intro } = require("../model/data/Intro.js");
const { HeroSection } = require("../model/data/HeroSection.js");
const { Detail } = require("../model/data/Detail.js");

router.get("/get-Portfolio", async (req, res) => {
    try {
        // Fetch all documents from the 'intro' collection
        let heroSectionData = await HeroSection.find();
        let IntroData = await Intro.find();
        let projectsData = await Project.find();
        let experiencesData = await Experience.find();
        let detailData = await Detail.find();

        // Send a response with the fetched data
        res.status(200).send({
            intro: IntroData[0],
            projects: projectsData,
            experiences: experiencesData,
            heroSection: heroSectionData[0],
            detail: detailData[0],

        });
        // console.error(hero_section);
    } catch (error) {
        // Handle errors, log them, and send a 500 Internal Server Error response
        console.error(error);
        res.status(500).send(error);
    }
});

router.post("/add-intro", async (req, res) => {
    try {
        // Assuming you are sending the data in the request body
        const { img, desc1, desc2, salution, skills, facebook, github, instagram, whatsapp, linkdein } = req.body;

        // Create a new Intro document
        const newIntro = new Intro({
            img,
            desc1,
            desc2,
            salution,
            skills,
            facebook,
            whatsapp,
            instagram,
            linkdein,
            github
        });

        // Save the newIntro document to the 'intro' collection
        const savedIntro = await newIntro.save();

        // Send a response with the saved data
        res.status(200).send({
            success: true,
            message: "Intro added successfully!",
            data: savedIntro,
        });
    } catch (error) {
        // Handle errors, log them, and send a 500 Internal Server Error response
        console.error(error);
        res.status(500).send(error);
    }
});
router.post("/update-intro/:id", async (req, res) => {
    try {
        const introId = req.params.id;

        const updatedIntro = await Intro.findByIdAndUpdate(
            introId,
            req.body,
            { new: true }
        );
        if (!updatedIntro) {
            return res.status(404).send({
                success: false,
                message: "Project not found",
            });
        }

        res.status(200).send({
            data: updatedIntro,
            success: true,
            message: "Intro updated successfully",
        });
    } catch (error) {
        console.error(error);

        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

router.post("/update-heroSEction/:id", async (req, res) => {
    try {
        const heroId = req.params.id;

        const updatedHeroSection = await HeroSection.findByIdAndUpdate(
            heroId,
            req.body,
            { new: true }
        );
        if (!updatedHeroSection) {
            return res.status(404).send({
                success: false,
                message: "Project not found",
            });
        }

        res.status(200).send({
            data: updatedHeroSection,
            success: true,
            message: "Intro updated successfully",
        });
    } catch (error) {
        console.error(error);

        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

router.post("/add-experience", async (req, res) => {
    try {
        const experience = new Experience(req.body);

        // Validate the project before saving
        const validationError = experience.validateSync();
        if (validationError) {
            return res.status(400).send({
                success: false,
                message: "Validation error",
                error: validationError.errors,
            });
        }

        // Save the project to the database
        await experience.save();

        res.status(200).send({
            success: true,
            message: "Experience added successfully!",
            data: experience,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

router.delete("/delete-experience/:id", async (req, res) => {
    try {
        const experienceId = req.params.id;


        // Find and delete the project by ID
        const deletedExperience = await Experience.findByIdAndDelete(experienceId);

        if (!deletedExperience) {
            return res.status(404).send({
                success: false,
                message: "Experience not found",
            });
        }

        res.status(200).send({
            success: true,
            message: "Experience deleted successfully",
            data: deletedExperience,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

router.post("/update-experience/:id", async (req, res) => {
    try {
        const ExperienceId = req.params.id;

        const updatedExperience = await Experience.findByIdAndUpdate(
            ExperienceId,
            req.body,
            { new: true }
        );

        if (!updatedExperience) {
            return res.status(404).send({
                success: false,
                message: "Experience not found",
            });
        }

        res.status(200).send({
            data: updatedExperience,
            success: true,
            message: "Experience updated successfully",
        });
    } catch (error) {
        console.error(error);

        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

router.post("/add-project", async (req, res) => {
    try {
        // Create a new instance of the Project model with the request body
        const project = new Project(req.body);

        // Validate the project before saving
        const validationError = project.validateSync();
        if (validationError) {
            // Return a 400 response if there's a validation error
            return res.status(400).send({
                success: false,
                message: "Validation error",
                error: validationError.errors,
            });
        }

        // Save the project to the database
        await project.save();

        // Return a 200 response with success details and the added project's data
        res.status(200).send({
            success: true,
            message: "Project added successfully!",
            data: project,
        });
    } catch (error) {
        // Handle any unexpected errors with a 500 response
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

router.delete("/delete-project/:id", async (req, res) => {
    try {
        const projectId = req.params.id;


        // Find and delete the project by ID
        const deletedProject = await Project.findByIdAndDelete(projectId);

        if (!deletedProject) {
            return res.status(404).send({
                success: false,
                message: "Project not found",
            });
        }

        res.status(200).send({
            success: true,
            message: "Project deleted successfully",
            data: deletedProject,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

router.post("/update-project/:id", async (req, res) => {
    try {
        const projectId = req.params.id;

        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            req.body,
            { new: true }
        );
        if (!updatedProject) {
            return res.status(404).send({
                success: false,
                message: "Project not found",
            });
        }

        res.status(200).send({
            data: updatedProject,
            success: true,
            message: "Project updated successfully",
        });
    } catch (error) {
        console.error(error);

        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

module.exports = router;
