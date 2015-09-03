package com.dataart.spreadsheetanalytics.functions.poi;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.reflections.Reflections;

public abstract class Functions {

    public final static String PACKAGE_FUNCTIONS = "com.dataart.spreadsheetanalytics.functions.poi";

    protected static Map<String, Class<? extends CustomFunction>> fs;

    static {
        fs = load(PACKAGE_FUNCTIONS);
    }

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

    public static Map<String, Class<? extends CustomFunction>> get() {
        return Collections.unmodifiableMap(fs);
    }

}
