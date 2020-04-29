/*
 * Copyright 2020 EntIT Software LLC, a Micro Focus company, L.P.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package unittesting;

import org.junit.After;
import org.junit.Before;
import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.rules.TestWatcher;
import com.hp.lft.report.Status;
import com.hp.lft.unittesting.UnitTestBase;

public class UnitTestClassBase extends UnitTestBase {

    protected static UnitTestClassBase instance;

    public static void globalSetup(Class<? extends UnitTestClassBase> testClass) throws Exception {
        if (instance == null)
            instance = testClass.newInstance();
        instance.classSetup();
    }

    @Before
    public void beforeTest() throws Exception {
        testSetup();
    }

    @After
    public void afterTest() throws Exception {

    }

    public static void globalTearDown() throws Exception {
        instance.classTearDown();
        getReporter().generateReport();
    }

    @ClassRule
    public static TestWatcher classWatcher = new TestWatcher() {
        @Override
        protected void starting(org.junit.runner.Description description) {
            className = description.getClassName();
        }
    };

    @Rule
    public TestWatcher watcher = new TestWatcher() {
        @Override
        protected void starting(org.junit.runner.Description description) {
            testName = description.getMethodName();
        }
        @Override
        protected void failed(Throwable e, org.junit.runner.Description description) {
            setStatus(Status.Failed, e);
            testTearDownNoThrow();
        }
        
        @Override
        protected void succeeded(org.junit.runner.Description description) {
            setStatus(Status.Passed);
            testTearDownNoThrow();
        }
    };

    @Override
    protected String getTestName() {
        return testName;
    }
    
    @Override
    protected String getClassName() {
        return className;
    }

    protected static String className;
    protected String testName;
    
}