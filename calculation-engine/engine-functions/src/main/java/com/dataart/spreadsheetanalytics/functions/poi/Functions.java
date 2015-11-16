/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.functions.poi;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.apache.poi.ss.formula.udf.AggregatingUDFFinder;
import org.apache.poi.ss.formula.udf.DefaultUDFFinder;
import org.apache.poi.ss.formula.udf.UDFFinder;
import org.reflections.Reflections;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Util class to work fith custom spreadsheet functions.
 * Allows to scan for such functions (java classes), load them into target (evaluator) objects.
 * 
 * This class can be extended to support loading of more custom functions from different packages.
 * 
 */
public class Functions {
    private static final Logger log = LoggerFactory.getLogger(Functions.class);
    
    /** Basic package where all the custom function are stored. By default static initializer tries to search it. */
    public static final String PACKAGE_FUNCTIONS = "com.dataart.spreadsheetanalytics.functions.poi";

    /**
     * Cache for custom functions (classes).
     */
    protected static final Map<String, Class<? extends CustomFunction>> fs;
    static { fs = load(PACKAGE_FUNCTIONS); }

    /**
     * POI's cache for custom functions: static instance of {@link UDFFinder}
     */
    protected static UDFFinder poifs;
    static { poifs = loadPoi(fs); }
    
    /**
     * Does scan and load for custom functions.
     * By default it is invoked from static block of this class with {@link #PACKAGE_FUNCTIONS} as parameter.
     * It scans given package for {@link CustomFunction} and if that class has {@link FunctionMeta} annotation on it,
     * it will be added to functions cache ({@link #fs}).
     * 
     * This can be called for other custom functions from 3pty package.
     */
    protected static Map<String, Class<? extends CustomFunction>> load(String functionPackage) {
        Map<String, Class<? extends CustomFunction>> map = new HashMap<>();

        Set<Class<? extends CustomFunction>> classes = new Reflections(functionPackage).getSubTypesOf(CustomFunction.class);

        for (Class<? extends CustomFunction> cls : classes) {

            if (cls.isAnnotationPresent(FunctionMeta.class)) {
                FunctionMeta meta = cls.getAnnotation(FunctionMeta.class);
                map.put(meta.value(), cls);
            }
        }

        return map;
    }

    /**
     * Does create a new instance of {@link UDFFinder} based on Set of CustomFunction provided.
     * If you extend {@link Functions} class and replace/add {@link #fs} please also replace/add {@link #poifs}.
     * UDFFinder instance is needed for some CustomFunction to do evaluation in POI.
     */
    protected static UDFFinder loadPoi(Map<String, Class<? extends CustomFunction>> fs) {
        List<String> names = new ArrayList<>(fs.size());
        List<CustomFunction> funcs = new ArrayList<>(fs.size());

        for (Entry<String, Class<? extends CustomFunction>> en : fs.entrySet()) {

            try {
                names.add(en.getKey());
                funcs.add(en.getValue().newInstance());
            } catch (Exception e) {
                log.error(String.format("Cannot create instance of CustomFunction %s", en.getKey()), e);
            }
        }

        return names.isEmpty() ? null
                               : new AggregatingUDFFinder(new DefaultUDFFinder(
                                       names.toArray(new String[names.size()]),
                                       funcs.toArray(new CustomFunction[funcs.size()])));
    }

    /**
     * Returns unmodifiable cache of custom functions (name-class).
     */
    public static Map<String, Class<? extends CustomFunction>> get() { return Collections.unmodifiableMap(fs); }

    /**
     * Returns static instance of {@link UDFFinder} for custom functions. Can be null.
     */
    public static UDFFinder getUdfFinder() { return poifs; }
    
}
