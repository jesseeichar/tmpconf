public class VariableSubstitutionTest {
	def ignorables = [".png", ".gif", ".ico", ".bmp", ".jpg", ""]
	/**
	 * @param project The maven project.  you can get all information about the project from this object
	 * @param log a logger for logging info
	 * @param ant an AntBuilder (see groovy docs) for executing ant tasks
	 * @param basedirFile a File object that references the base directory of the conf project
	 * @param target the server property which is normally set by the build profile.  It indicates the project that is being built
	 * @param classifier the "classifier" that the project is being deployed to.  For example integration or production
	 * @param targetDir a File object referencing the targetDir
	 * @param buildSupportDir a File object referencing the build_support dir of the target project
	 * @param outputDir the directory to copy the generated configuration files to
	 */
	def execute(def project, def log, def ant, def basedirFile, 
							def target, def classifier, def targetDir, 
							def buildSupportDir, def outputDir) {
		new File(classesDir).eachFileRecurse{ file ->
			def extIndex = file.name.lastIndexOf(".")
			def ignorable = file.name.equals("favicon")
			if(extIndex > -1) {
				def ext = file.name.substring(extIndex)
				println(ext)
				ignorable = ignorables.contains(ext)
			}

			if(file.isFile() && !ignorable) {
				def m = file.getText("UTF-8") =~ /@\S*@/
				assert !m, "${m[0]} was found as an unmatched variable in ${file.path.substring(classesDir.length())}.  Define the variable in a shared.maven.filters"
			}
		}
	}
}