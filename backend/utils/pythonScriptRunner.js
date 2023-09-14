const { exec } = require('child_process');

async function runPythonScript(scriptPath, cmdLineArgs, virtualEnvPath = 'ECO_ENV') {
    try {
        // Determine the correct shell command based on the platform
        const shell = process.platform === 'win32' ? 'cmd' : 'bash';

        // Activate the virtual environment and run the Python script
        const activationScript = process.platform === 'win32' ? `"${virtualEnvPath}\\Scripts\\activate"` : `source ./${virtualEnvPath}/bin/activate`;
        
        const pythonScriptCommand = `python "${scriptPath}" ${cmdLineArgs}`;
        const fullCommand = `${activationScript} && ${pythonScriptCommand}`;

        console.log('Full Command:', fullCommand);

        const { stdout, stderr } = await executeCommand(shell, fullCommand);

        if (stderr) {
            console.error('Python stderr:', stderr); // Print Python error messages
            throw new Error('Python script encountered an error.');
        }

        // Return the stdout as the result of the function
        return stdout;
    } catch (err) {
        throw err;
    }
}

function executeCommand(shell, command) {
    return new Promise((resolve, reject) => {
        const childProcess = exec(`${shell} /c "${command}"`, (error, stdout, stderr) => {
            if (error) {
                console.error('Error while executing command:', error);
                reject(error);
            } else {
                resolve({ stdout, stderr });
            }
        });

        childProcess.on('error', (err) => {
            reject(err);
        });
    });
}

module.exports = runPythonScript;
